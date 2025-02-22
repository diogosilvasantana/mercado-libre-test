import {
  getItems,
  getItemDetails,
} from "./../../../interfaces/controllers/itemsController";
import {
  fetchItems,
  fetchItemDetails,
} from "./../../../application/services/mercadoLibreService";
import { Request, Response } from "express";

// Mock serviços
jest.mock("@/application/services/mercadoLibreService");

describe("Items Controller Tests", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let resJsonMock: jest.Mock;

  beforeEach(() => {
    resJsonMock = jest.fn();
    res = {
      locals: { author: { name: "John", lastname: "Doe" } },
      json: resJsonMock,
      status: jest.fn().mockReturnThis(),
    };
  });

  describe("getItems", () => {
    it("should fetch items and return them with author info", async () => {
      req = { query: { q: "test" } };
      const mockItemsResponse = {
        categories: ["Tech"],
        items: [{ id: "1", title: "Item1" }],
      };

      (fetchItems as jest.Mock).mockResolvedValueOnce(mockItemsResponse);

      await getItems(req as Request, res as Response);

      expect(fetchItems).toHaveBeenCalledWith("test");
      expect(resJsonMock).toHaveBeenCalledWith({
        author: { name: "John", lastname: "Doe" },
        ...mockItemsResponse,
      });
    });

    it("should return a 500 status on error", async () => {
      req = { query: { q: "test" } };

      (fetchItems as jest.Mock).mockRejectedValueOnce(
        new Error("Failed to fetch")
      );

      await getItems(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(resJsonMock).toHaveBeenCalledWith({
        error: "Something went wrong while fetching items!",
      });
    });
  });

  describe("getItemDetails", () => {
    it("should fetch item details and return them with author info", async () => {
      req = { params: { id: "123" } };
      const mockItemDetailsResponse = { id: "123", title: "Item Details" };

      (fetchItemDetails as jest.Mock).mockResolvedValueOnce(
        mockItemDetailsResponse
      );

      await getItemDetails(req as Request, res as Response);

      expect(fetchItemDetails).toHaveBeenCalledWith("123");
      expect(resJsonMock).toHaveBeenCalledWith({
        author: { name: "John", lastname: "Doe" },
        item: mockItemDetailsResponse,
      });
    });

    it("should return a 500 status on error", async () => {
      req = { params: { id: "123" } };

      (fetchItemDetails as jest.Mock).mockRejectedValueOnce(
        new Error("Failed to fetch")
      );

      await getItemDetails(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(resJsonMock).toHaveBeenCalledWith({
        error: "Error fetching item details!",
      });
    });
  });
});
