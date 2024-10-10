const Product = require('../models/product');

const getAllProducts = async (req, res, next) => {
  try {
    const {
      featured,
      rating,
      price,
      name,
      company,
      sort,
      fields,
      page,
      limit,
      numericFilters,
    } = req.query;
    const queryObject = {};

    if (featured) {
      queryObject.featured = featured === 'true';
    }

    if (name) {
      queryObject.name = { $regex: name, $options: 'i' }; // 'i' for case-insensitive
    }

    if (company) {
      queryObject.company = company;
    }

    if (numericFilters) {
      const operatorMap = {
        '>': '$gt',
        '<': '$lt',
        '=': '$eq',
        '>=': '$gte',
        '<=': '$lte',
      };
      const options = ['price', 'rating'];
      const regex = /\b(<|>|>=|=|<=)\b/g;

      let filters = numericFilters.replace(
        regex,
        (match) => `-${operatorMap[match]}-`
      );

      filters = filters.split(',').forEach((item) => {
        const [field, operator, value] = item.split('-');
        if (options.includes(field)) {
          queryObject[field] = { [operator]: Number(value) };
        }
      });
    }

    let result = Product.find(queryObject);

    if (sort) {
      const sortBy = sort.split(',').join(' ');
      result = result.sort(sortBy);
    } else {
      result = result.sort('createdAt');
    }

    if (fields) {
      const selectBy = fields.split(',').join(' ');
      result = result.select(selectBy);
    }

    const pageNum = Number(page) || 1; // Default to 1 if invalid
    const limitNum = Number(limit) || 10; // Default to 10 if invalid

    const skip = (pageNum - 1) * limitNum;
    result = result.skip(skip).limit(limitNum);

    const products = await result;
    res.status(200).json({ totalCount: products.length, products });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllProducts };
