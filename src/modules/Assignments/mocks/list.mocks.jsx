export default [
  {
    id: 1,
    name: 'S1',
    ues: [
      {
        id: 1,
        name: 'UE1',
        subjects: [
          {
            id: 1,
            name: 'Maths',
            assignments: [
              {
                id: 1,
                name: 'DM de maths',
                description: 'Des probas',
                coefficient: 1
              },
              {
                id: 3,
                name: 'Partiel final',
                description: 'Partiel final',
                coefficient: 3
              }
            ]
          },
          {
            id: 2,
            name: 'Signal',
            assignments: [
              {
                id: 2,
                name: 'Vitesse du son',
                description: 'DM de M. Calvet',
                coefficient: 2
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: 'UE3',
        subjects: [
          {
            id: 3,
            name: 'Anglais',
            assignments: [
              {
                id: 8,
                name: 'Devoir partiel',
                description: 'TOEIC',
                coefficient: 2
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'S2',
    ues: [
      {
        id: 5,
        name: 'UE5',
        subjects: [
          {
            id: 10,
            name: 'Maths',
            assignments: [
              {
                id: 17,
                name: 'DM de maths',
                description: 'Des probas',
                coefficient: 1
              },
              {
                id: 22,
                name: 'Partiel final',
                description: 'Partiel final',
                coefficient: 3
              }
            ]
          },
        ]
      },
      {
        id: 6,
        name: 'UE6',
        subjects: [
          {
            id: 78,
            name: 'Anglais',
            assignments: [
              {
                id: 31,
                name: 'Devoir partiel',
                description: 'TOEIC',
                coefficient: 2
              }
            ]
          }
        ]
      },
      {
        id: 7,
        name: 'UE7',
        subjects: [
          {
            id: 45,
            name: 'Anglais',
            assignments: [
              {
                id: 34,
                name: 'Devoir partiel',
                description: 'TOEIC',
                coefficient: 2
              }
            ]
          }
        ]
      }
    ]
  }
];
