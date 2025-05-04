{
  //* Generic With Interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };

    smartWatch: T;
    bike?: X;
  }

  type LiteWatch = {
    brand: string;
    model: string;
    display: string;
    isWaterProof?: boolean;
  };

  const poorDeveloper: Developer<LiteWatch> = {
    name: "Sifat",
    computer: {
      brand: "Asus",
      model: "qcy-ht05",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "Xiaomi Watch",
      model: "X-456c",
      display: "LED",
      isWaterProof: false,
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    isWaterProof?: boolean;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  type YamahaBike = {
    model: string;
    engineCapacity: string;
  };

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: " Rich Dev Sifat",
    computer: {
      brand: "HP",
      model: "m-256c",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "something",
      isWaterProof: true,
      heartTrack: true,
      sleepTrack: false,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "160cc",
    },
  };
}
