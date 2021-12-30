import React from "react";
import { ApiBasePath } from "./Api";
import { ElementItem } from "./ElementItem";

export const getAll = (): Promise<ElementItem[]> => {
  return fetch(`${ApiBasePath}test.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const items: ElementItem[] = [];
      for (const item in data) {
        items.push({ id: item, value: data[item].value });
      }
      return items;
    });
};

export const getItem = (id?: string): Promise<ElementItem> => {
  return fetch(`${ApiBasePath}test/${id}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

export const createItem = (value: string): Promise<string> => {
  return fetch(`${ApiBasePath}test.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      value: value,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

export const updateItem = (id: string, value: string): Promise<string> => {
  return fetch(`${ApiBasePath}test/${id}.json`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      value: value,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
};
