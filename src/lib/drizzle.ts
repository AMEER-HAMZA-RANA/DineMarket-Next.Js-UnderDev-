import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
// import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

// export const todoTable = pgTable("todos", {
//   id: serial('id').primaryKey(),
//   task: varchar('task', {length: 255})
// })

// export type Todo = InferModel<typeof todoTable>
// export type NewTodo = InferModel<typeof todoTable, 'insert'>


export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", {
    length: 255
  }).notNull(),
  product_id: varchar("product_id", {
    length: 255
  }).notNull(),
  quantity: integer("quantity").notNull()
})

export const db = drizzle(sql)