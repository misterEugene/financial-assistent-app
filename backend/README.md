Вот пример данных для каждой таблицы вашей схемы:

---

### 1. Таблица `users`
| uuid                                   | first_name | last_name | email                | password_hash                                     |
|----------------------------------------|------------|-----------|----------------------|--------------------------------------------------|
| 550e8400-e29b-41d4-a716-446655440000 | John       | Doe       | john.doe@example.com | $2a$12$somethinghashedpassword1234567890abcd  |
| 550e8400-e29b-41d4-a716-446655440001 | Alice      | Smith     | alice.smith@example.com | $2a$12$anotherhashedpassword123456789abcd |

---

### 2. Таблица `wallets`
| wallet_id | owner_id                              | balance  | wallet_type_id | created_at          | updated_at          |
|-----------|---------------------------------------|----------|----------------|---------------------|---------------------|
| 1         | 550e8400-e29b-41d4-a716-446655440000 | 5000.00  | 1              | 2024-11-01 10:00:00 | 2024-11-22 15:00:00 |
| 2         | 550e8400-e29b-41d4-a716-446655440001 | 15000.00 | 2              | 2024-11-10 09:00:00 | 2024-11-20 18:30:00 |

---

### 3. Таблица `types_wallets`
| wallet_type_id | type_name    |
|----------------|--------------|
| 1              | Savings      |
| 2              | Credit Card  |

---

### 4. Таблица `transactions`
| transaction_id                         | wallet_id | amount  | transaction_type_id | category_id | created_at          | description           |
|----------------------------------------|-----------|---------|---------------------|-------------|---------------------|-----------------------|
| ec8b5f3d-e29b-41d4-a716-446655440002 | 1         | -200.00 | 2                   | 1           | 2024-11-22 14:00:00 | Grocery shopping      |
| ec8b5f3d-e29b-41d4-a716-446655440003 | 1         | 1000.00 | 1                   | 3           | 2024-11-21 12:00:00 | Salary deposit        |
| ec8b5f3d-e29b-41d4-a716-446655440004 | 2         | -50.00  | 2                   | 2           | 2024-11-20 18:00:00 | Monthly subscription  |

---balance_after

### 5. Таблица `transactions_types`
| transaction_type_id | type_name |
|---------------------|-----------|
| 1                   | Income    |
| 2                   | Expense   |

---

### 6. Таблица `categories`
| category_id | user_id                              | category_name | color     | created_at          | description        | is_system |
|-------------|--------------------------------------|---------------|-----------|---------------------|--------------------|-----------|
| 1           | 550e8400-e29b-41d4-a716-446655440000 | Groceries     | #FF5733 | 2024-11-01 10:00:00 | Food and supplies  | false     |
| 2           | NULL                                 | Subscriptions | #33FF57 | 2024-11-01 10:00:00 | Monthly services   | true      |
| 3           | 550e8400-e29b-41d4-a716-446655440001 | Salary        | #3357FF | 2024-11-10 09:00:00 | Monthly income     | false     |

---

### 7. Таблица `categories_transactions_types`
| category_id | transaction_type_id |
|-------------|---------------------|
| 1           | 2                   |
| 2           | 2                   |
| 3           | 1                   |

---

### Связи между данными
1. Пользователь John Doe (uuid = 550e8400-e29b-41d4-a716-446655440000) имеет кошелёк 1, который связан с типом Savings и балансом 5000.00.
2. Транзакция с ID ec8b5f3d-e29b-41d4-a716-446655440002 связана с кошельком 1, категорией Groceries и типом Expense.
3. Категория Groceries доступна только для транзакций типа Expense.