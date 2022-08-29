/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTotalWithdrawal = /* GraphQL */ `
  query GetTotalWithdrawal($id: ID!) {
    getTotalWithdrawal(id: $id) {
      id
      date
      amount
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTotalWithdrawals = /* GraphQL */ `
  query ListTotalWithdrawals(
    $filter: ModelTotalWithdrawalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTotalWithdrawals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        amount
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTotalWithdrawals = /* GraphQL */ `
  query SyncTotalWithdrawals(
    $filter: ModelTotalWithdrawalFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTotalWithdrawals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        amount
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTotalProfit = /* GraphQL */ `
  query GetTotalProfit($id: ID!) {
    getTotalProfit(id: $id) {
      id
      date
      profit
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTotalProfits = /* GraphQL */ `
  query ListTotalProfits(
    $filter: ModelTotalProfitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTotalProfits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        profit
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTotalProfits = /* GraphQL */ `
  query SyncTotalProfits(
    $filter: ModelTotalProfitFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTotalProfits(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        profit
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getWeeklyWithdrawal = /* GraphQL */ `
  query GetWeeklyWithdrawal($id: ID!) {
    getWeeklyWithdrawal(id: $id) {
      id
      date
      amount
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listWeeklyWithdrawals = /* GraphQL */ `
  query ListWeeklyWithdrawals(
    $filter: ModelWeeklyWithdrawalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeeklyWithdrawals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        amount
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWeeklyWithdrawals = /* GraphQL */ `
  query SyncWeeklyWithdrawals(
    $filter: ModelWeeklyWithdrawalFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWeeklyWithdrawals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        amount
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getWeeklyProfit = /* GraphQL */ `
  query GetWeeklyProfit($id: ID!) {
    getWeeklyProfit(id: $id) {
      id
      date
      profit
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listWeeklyProfits = /* GraphQL */ `
  query ListWeeklyProfits(
    $filter: ModelWeeklyProfitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeeklyProfits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        profit
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWeeklyProfits = /* GraphQL */ `
  query SyncWeeklyProfits(
    $filter: ModelWeeklyProfitFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWeeklyProfits(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        profit
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getWeeklyBalance = /* GraphQL */ `
  query GetWeeklyBalance($id: ID!) {
    getWeeklyBalance(id: $id) {
      id
      date
      balance
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listWeeklyBalances = /* GraphQL */ `
  query ListWeeklyBalances(
    $filter: ModelWeeklyBalanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeeklyBalances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        balance
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWeeklyBalances = /* GraphQL */ `
  query SyncWeeklyBalances(
    $filter: ModelWeeklyBalanceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWeeklyBalances(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        balance
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getWithdrawal = /* GraphQL */ `
  query GetWithdrawal($id: ID!) {
    getWithdrawal(id: $id) {
      id
      date
      amount
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listWithdrawals = /* GraphQL */ `
  query ListWithdrawals(
    $filter: ModelWithdrawalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWithdrawals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        amount
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWithdrawals = /* GraphQL */ `
  query SyncWithdrawals(
    $filter: ModelWithdrawalFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWithdrawals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        amount
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      investment
      balance
      Withdrawals {
        items {
          id
          date
          amount
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      profit
      WeeklyBalances {
        items {
          id
          date
          balance
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      WeeklyProfits {
        items {
          id
          date
          profit
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      WeeklyWithdrawals {
        items {
          id
          date
          amount
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      TotalProfits {
        items {
          id
          date
          profit
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      TotalWithdrawals {
        items {
          id
          date
          amount
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        investment
        balance
        Withdrawals {
          nextToken
          startedAt
        }
        profit
        WeeklyBalances {
          nextToken
          startedAt
        }
        WeeklyProfits {
          nextToken
          startedAt
        }
        WeeklyWithdrawals {
          nextToken
          startedAt
        }
        TotalProfits {
          nextToken
          startedAt
        }
        TotalWithdrawals {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        investment
        balance
        Withdrawals {
          nextToken
          startedAt
        }
        profit
        WeeklyBalances {
          nextToken
          startedAt
        }
        WeeklyProfits {
          nextToken
          startedAt
        }
        WeeklyWithdrawals {
          nextToken
          startedAt
        }
        TotalProfits {
          nextToken
          startedAt
        }
        TotalWithdrawals {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
