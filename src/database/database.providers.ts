import AppDataSource from "../ormconfig";

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      return AppDataSource.initialize();
    },
  },
];
