import {
  fetchItems,
  fetchItemDetails,
} from "./../../../application/services/mercadoLibreService";
import api from "./../../../infrastructure/axios/axiosConfig";

jest.mock("@/infrastructure/axios/axiosConfig");
const mockedApi = api as jest.Mocked<typeof api>;

describe("mercadoLibreService Tests", () => {
  describe("fetchItems function", () => {
    it("should fetch items and categories from the MercadoLibre API", async () => {
      const mockResponse = {
        data: {
          results: [
            {
              id: "1",
              title: "Test Item",
              price: 100,
              currency_id: "USD",
              thumbnail: "img.jpg",
              condition: "new",
              shipping: { free_shipping: true },
            },
          ],
          filters: [
            {
              id: "category",
              values: [{ path_from_root: [{ name: "Category 1" }] }],
            },
          ],
        },
      };

      mockedApi.get.mockResolvedValue(mockResponse);

      const { categories, items } = await fetchItems("query");

      expect(categories).toEqual(["Category 1"]);
      expect(items).toHaveLength(1);
      expect(items[0]).toMatchObject({ id: "1", title: "Test Item" });
    });
    it("should fetch items and categories from the MercadoLibre API with filter is null", async () => {
      const mockResponse = {
        data: {
          results: [
            {
              id: "1",
              title: "Test Item",
              price: 100,
              currency_id: "USD",
              thumbnail: "img.jpg",
              condition: "new",
              shipping: { free_shipping: true },
            },
          ],
          filters: [],
        },
      };

      mockedApi.get.mockResolvedValue(mockResponse);

      const { categories, items } = await fetchItems("query");

      expect(categories).toEqual([]);
      expect(items).toHaveLength(1);
      expect(items[0]).toMatchObject({ id: "1", title: "Test Item" });
    });
  });

  describe("fetchItemDetails function", () => {
    it("should fetch item details from the MercadoLibre API", async () => {
      const mockItemResponse = {
        data: {
          id: "123",
          title: "Detailed Test Item",
          price: 200,
          currency_id: "USD",
          pictures: [{ secure_url: "http://image.com/detail.jpg" }],
          condition: "new",
          shipping: { free_shipping: true },
          sold_quantity: 10,
        },
      };

      const mockDescriptionResponse = {
        data: { plain_text: "Item description" },
      };

      mockedApi.get
        .mockResolvedValueOnce(mockItemResponse)
        .mockResolvedValueOnce(mockDescriptionResponse);

      const itemDetails = await fetchItemDetails("123");

      expect(itemDetails).toEqual({
        id: "123",
        title: "Detailed Test Item",
        price: {
          currency: "USD",
          amount: 200,
          decimals: 0,
        },
        picture: "http://image.com/detail.jpg",
        condition: "new",
        free_shipping: true,
        sold_quantity: 10,
        description: "Item description",
      });
    });
  });
});
