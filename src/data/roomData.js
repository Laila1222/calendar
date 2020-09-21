 const rooms = [
    {
      id: 1,
      timeSlots: [
        {
          date: "2020-09-20T22:00:00.000Z",
          startTime: 8,
          durationHours: 2,
          available: false,
        },
        {
          date: "2020-09-21T22:00:00.000Z",
          startTime: 9,
          durationHours: 2,
          available: false,
        },
        {
          date: "2020-09-21T22:00:00.000Z",
          startTime: 10,
          durationHours: 2,
          available: false,
        },
        {
          date: "2020-09-21T22:00:00.000Z",
          startTime: 14,
          durationHours: 2,
          available: true,
        },
        {
            date: "2020-09-22T22:00:00.000Z",
            startTime: 10,
            durationHours: 2,
            available: false,
          },
          {
            date: "2020-09-22T22:00:00.000Z",
            startTime: 12,
            durationHours: 2,
            available: true,
          },
          {
            date: "2020-09-22T22:00:00.000Z",
            startTime: 14,
            durationHours: 2,
            available: false,
          },
      ],
    },
    {
      id: 2,
      timeSlots: [
        {
          date: "2020-09-21T22:00:00.000Z",
          startTime: 8,
          durationHours: 2,
          available: false,
        },
        {
          date: "2020-09-21T22:00:00.000Z",
          startTime: 10,
          durationHours: 2,
          available: true,
        },
        {
          date: "2020-09-21T22:00:00.000Z",
          startTime: 12,
          durationHours: 2,
          available: false,
        },
        {
          date: "2020-09-21T22:00:00.000Z",
          startTime: 14,
          durationHours: 2,
          available: true,
        },
        {
            date: "2020-09-22T22:00:00.000Z",
            startTime: 8,
            durationHours: 2,
            available: false,
          },
          {
            date: "2020-09-22T22:00:00.000Z",
            startTime: 10,
            durationHours: 2,
            available: true,
          },
          {
            date: "2020-09-22T22:00:00.000Z",
            startTime: 12,
            durationHours: 2,
            available: true,
          },
      ],
    },
  ];

  export default rooms;