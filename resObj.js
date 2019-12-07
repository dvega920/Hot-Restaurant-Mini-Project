class ReservationObj {
  // create Employee object given the name, id & email
  constructor(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

// reservations will be an array of Reservation Objects
// let reservations = [];

// use
// const reservation = new ReservationObj(id, name, email, phone);
// to create new obj and
// push.reservations(reservation);
//   to add it to the reservations.

// similarly with waitlist

class WaitlistObj {
  constructor(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  };
};

// waitlist will be an array of WaitlistObj Objects
// let waitlist = [];
