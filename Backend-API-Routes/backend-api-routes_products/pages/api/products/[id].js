import { getProductById } from "@/services/productServices";

export default function handler(req, res) {
  const { id } = req.query;
  const product = getProductById(id);
  if (!product) {
    return response.status(404).json({ status: "Not found" });
  }
  res.status(200).json(product);
}
