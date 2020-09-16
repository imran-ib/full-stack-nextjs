# Migration `20200916193322-first-migration`

This migration has been generated at 9/16/2020, 10:33:22 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"email" text   NOT NULL ,
"password" text   NOT NULL ,
"id" SERIAL,
"name" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Post" (
"authorId" integer   ,
"content" text   ,
"id" SERIAL,
"published" boolean   NOT NULL DEFAULT false,
"title" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.email_unique" ON "public"."User"("email")

ALTER TABLE "public"."Post" ADD FOREIGN KEY ("authorId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200916193322-first-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,28 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  email    String  @unique
+  password String
+  id       Int     @default(autoincrement()) @id
+  name     String?
+  posts    Post[]
+}
+
+model Post {
+  authorId  Int?
+  content   String?
+  id        Int     @default(autoincrement()) @id
+  published Boolean @default(false)
+  title     String
+  author    User?   @relation(fields: [authorId], references: [id])
+}
```


