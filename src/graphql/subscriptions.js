/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTotalWithdrawal = /* GraphQL */ `
  subscription OnCreateTotalWithdrawal {
    onCreateTotalWithdrawal {
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
export const onUpdateTotalWithdrawal = /* GraphQL */ `
  subscription OnUpdateTotalWithdrawal {
    onUpdateTotalWithdrawal {
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
export const onDeleteTotalWithdrawal = /* GraphQL */ `
  subscription OnDeleteTotalWithdrawal {
    onDeleteTotalWithdrawal {
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
export const onCreateTotalProfit = /* GraphQL */ `
  subscription OnCreateTotalProfit {
    onCreateTotalProfit {
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
export const onUpdateTotalProfit = /* GraphQL */ `
  subscription OnUpdateTotalProfit {
    onUpdateTotalProfit {
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
export const onDeleteTotalProfit = /* GraphQL */ `
  subscription OnDeleteTotalProfit {
    onDeleteTotalProfit {
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
export const onCreateWeeklyWithdrawal = /* GraphQL */ `
  subscription OnCreateWeeklyWithdrawal {
    onCreateWeeklyWithdrawal {
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
export const onUpdateWeeklyWithdrawal = /* GraphQL */ `
  subscription OnUpdateWeeklyWithdrawal {
    onUpdateWeeklyWithdrawal {
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
export const onDeleteWeeklyWithdrawal = /* GraphQL */ `
  subscription OnDeleteWeeklyWithdrawal {
    onDeleteWeeklyWithdrawal {
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
export const onCreateWeeklyProfit = /* GraphQL */ `
  subscription OnCreateWeeklyProfit {
    onCreateWeeklyProfit {
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
export const onUpdateWeeklyProfit = /* GraphQL */ `
  subscription OnUpdateWeeklyProfit {
    onUpdateWeeklyProfit {
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
export const onDeleteWeeklyProfit = /* GraphQL */ `
  subscription OnDeleteWeeklyProfit {
    onDeleteWeeklyProfit {
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
export const onCreateWeeklyBalance = /* GraphQL */ `
  subscription OnCreateWeeklyBalance {
    onCreateWeeklyBalance {
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
export const onUpdateWeeklyBalance = /* GraphQL */ `
  subscription OnUpdateWeeklyBalance {
    onUpdateWeeklyBalance {
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
export const onDeleteWeeklyBalance = /* GraphQL */ `
  subscription OnDeleteWeeklyBalance {
    onDeleteWeeklyBalance {
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
export const onCreateWithdrawal = /* GraphQL */ `
  subscription OnCreateWithdrawal {
    onCreateWithdrawal {
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
export const onUpdateWithdrawal = /* GraphQL */ `
  subscription OnUpdateWithdrawal {
    onUpdateWithdrawal {
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
export const onDeleteWithdrawal = /* GraphQL */ `
  subscription OnDeleteWithdrawal {
    onDeleteWithdrawal {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
