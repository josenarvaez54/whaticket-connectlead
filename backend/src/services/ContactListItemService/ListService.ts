import { Sequelize, Op } from "sequelize";
import ContactListItem from "../../models/ContactListItem";

interface Request {
  isWhatsappValid?: boolean | null;
  searchParam?: string;
  pageNumber?: string;
  companyId: number | string;
  contactListId: number | string;
}

interface Response {
  contacts: ContactListItem[];
  count: number;
  hasMore: boolean;
}

const ListService = async ({
  isWhatsappValid,
  searchParam = "",
  pageNumber = "1",
  companyId,
  contactListId
}: Request): Promise<Response> => {

  const whereCondition: any = {
    companyId,
    contactListId,
    [Op.or]: [
      {
        name: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("name")),
          "LIKE",
          `%${searchParam.toLowerCase().trim()}%`
        )
      },
      { number: { [Op.like]: `%${searchParam.toLowerCase().trim()}%` } }
    ]
  };

  // Adiciona a condição isWhatsappValid fora do Op.or
  if (isWhatsappValid !== null && isWhatsappValid !== undefined) {
    whereCondition.isWhatsappValid = {
      [Op.eq]: isWhatsappValid
    };
  }


  const limit = 150;
  const offset = limit * (+pageNumber - 1);

  const { count, rows: contacts } = await ContactListItem.findAndCountAll({
    where: whereCondition,
    limit,
    offset,
    order: [["name", "ASC"]]
  });

  const hasMore = count > offset + contacts.length;

  return {
    contacts,
    count,
    hasMore
  };
};

export default ListService;
