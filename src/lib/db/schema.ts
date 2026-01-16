import { pgTable, uuid, varchar, text, jsonb, timestamp, real, integer } from 'drizzle-orm/pg-core';

/**
 * MDX Content Blocks - Dynamic content for CopilotKit rendering
 */
export const mdxContent = pgTable('mdx_content', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  category: varchar('category', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

/**
 * Calculation History - Store all mortgage/stamp duty calculations
 */
export const calculations = pgTable('calculations', {
  id: uuid('id').primaryKey().defaultRandom(),
  sessionId: varchar('session_id', { length: 255 }),
  calculationType: varchar('calculation_type', { length: 50 }).notNull(), // 'mortgage', 'stamp_duty', 'affordability', 'comparison'
  inputData: jsonb('input_data').notNull(),
  resultData: jsonb('result_data').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

/**
 * User Preferences - Store user settings and saved scenarios
 */
export const userPreferences = pgTable('user_preferences', {
  id: uuid('id').primaryKey().defaultRandom(),
  sessionId: varchar('session_id', { length: 255 }).unique(),
  preferences: jsonb('preferences').default({}),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

/**
 * Mortgage Scenarios - Named saved mortgage configurations
 */
export const mortgageScenarios = pgTable('mortgage_scenarios', {
  id: uuid('id').primaryKey().defaultRandom(),
  sessionId: varchar('session_id', { length: 255 }),
  name: varchar('name', { length: 255 }).notNull(),
  principal: real('principal').notNull(),
  interestRate: real('interest_rate').notNull(),
  termYears: integer('term_years').notNull(),
  propertyValue: real('property_value'),
  deposit: real('deposit'),
  monthlyPayment: real('monthly_payment'),
  totalInterest: real('total_interest'),
  stampDuty: real('stamp_duty'),
  isFirstTimeBuyer: integer('is_first_time_buyer').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

// Types for TypeScript
export type MdxContent = typeof mdxContent.$inferSelect;
export type NewMdxContent = typeof mdxContent.$inferInsert;

export type Calculation = typeof calculations.$inferSelect;
export type NewCalculation = typeof calculations.$inferInsert;

export type UserPreference = typeof userPreferences.$inferSelect;
export type NewUserPreference = typeof userPreferences.$inferInsert;

export type MortgageScenario = typeof mortgageScenarios.$inferSelect;
export type NewMortgageScenario = typeof mortgageScenarios.$inferInsert;
