function createTickets(data: string[], criteria: string): object[] {
  class Ticket {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string, price: number, status: string) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  const arr: object[] = [];

  data.forEach((element) => {
    const [destination, _, status] = element.split("|");
    const price: number = +element.split("|")[1];

    arr.push(new Ticket(destination, +price.toFixed(5), status));
  });

  const sorted: object[] = arr.sort(
    (a, b) =>
      a[criteria].localeCompare(b[criteria]) || a[criteria] - b[criteria]
  );

  return sorted;
}

console.log(
  createTickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
