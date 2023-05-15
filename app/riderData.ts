type Socials = {
    twitter: string;
    instagram: string;
    strava: string;
  };
  
  interface riderInfo {
    name: string;
    country: string;
    team: string;
    age: number;
    height: string;
    specialty: string;
    world_ranking: number;
    social_media: Socials;
  }
  
  export const riderInfo: riderInfo[] = [
    {
      name: "Demi Vollering",
      country: "Netherlands",
      team: "SD Worx",
      age: 26,
      height: "1.72m",
      specialty: "Climbing",
      world_ranking: 1,
      social_media: {
        twitter: "https://twitter.com/demivollering",
        instagram: "https://www.instagram.com/demivollering/",
        strava: "https://www.strava.com/athletes/16080090",
      },
    },
  
    {
      name: "Lorenna Wiebes",
      country: "Netherlands",
      team: "SD Worx",
      age: 24,
      height: "1.71m",
      specialty: "climbing",
      world_ranking: 2,
      social_media: {
        twitter: "https://twitter.com/lorenawiebes",
        instagram: "https://www.instagram.com/lorenawiebes/",
        strava: "https://www.strava.com/athletes/7703167",
      },
    },
  
    {
      name: "Annemiek van Vleuten",
      country: "Netherlands",
      team: "Movistar",
      age: 40,
      height: "1.68m",
      specialty: "Time Trial",
      world_ranking: 3,
      social_media: {
        twitter: "https://twitter.com/AvVleuten",
        instagram: "https://www.instagram.com/annemiekvanvleuten/",
        strava: "",
      },
    },
    {
      name: "Elisa Longo Borghini",
      country: "Italy",
      team: "Trek Segafreo",
      age: 31,
      height: "1.70m",
      specialty: "Time Trial",
      world_ranking: 4,
      social_media: {
        twitter: "https://twitter.com/ElisaLongoB",
        instagram: "https://www.instagram.com/elisalongob/",
        strava: "https://www.strava.com/pros/1189566",
      },
    },
    {
      name: "Lotte Kopecky",
      country: "Belgium",
      team: "SD Worx",
      age: 27,
      height: "1.70m",
      specialty: "Time Trial",
      world_ranking: 5,
      social_media: {
        twitter: "https://twitter.com/@LotteKopecky",
        instagram: "https://www.instagram.com/lottekopecky/",
        strava: "n/a",
      },
    },
    {
      name: "Silvia Persico",
      country: "Italy",
      team: "UAE Team ADQ",
      age: 25,
      height: "1.64m",
      specialty: "Time Trial",
      world_ranking: 6,
      social_media: {
        twitter: "https://twitter.com/silvia_persico",
        instagram: "https://www.instagram.com/silvia_persico/",
        strava: "https://www.strava.com/athletes/40115427",
      },
    },
    {
      name: "Liane Lippert",
      country: "Germany",
      team: "Team DSM",
      age: 23,
      height: "1.70m",
      specialty: "climbing",
      world_ranking: 7,
      social_media: {
        twitter: "@lianelippert",
        instagram: "@lianelippert",
        strava: "",
      },
    },
    {
      name: "Elisa Balsamo",
      country: "Italy",
      team: "Valcar-Travel & Service",
      age: 23,
      height: "1.71m",
      specialty: "sprinting",
      world_ranking: 8,
      social_media: {
        twitter: "@ElisaBalsamo_",
        instagram: "@elisabalsamo",
        strava: "",
      },
    },
  
    {
      name: "Grace Brown",
      country: "Australia",
      team: "BikeExchange",
      age: 29,
      height: "1.76m",
      specialty: "time-trialing",
      world_ranking: 9,
      social_media: {
        twitter: "@gracieelvin",
        instagram: "@gracieelvin",
        strava: "",
      },
    },
    {
      name: "Juliette Labous",
      country: "France",
      team: "Team DSM",
      age: 23,
      height: "1.70m",
      specialty: "climbing",
      world_ranking: 10,
      social_media: {
        twitter: "@juliettelabous",
        instagram: "@juliettelabous",
        strava: "",
      },
    },
  ];
  