// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestList1 = ["Asim", "Zahid", "Fahad"];
for (var a = 0; a < guestList1.length; a++) {
    console.log("I would like to invite ".concat(guestList1[a], " on Dinner."));
}
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
var cantGuestList = "Fahad";
console.log("".concat(cantGuestList, " can't make it for Dinner."));
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
var newPerson = "Zeeshan";
// let indexCantGuestList: number = guestList1.indexOf(cantGuestList);
// console.log(`${newPerson} new Guest inviting for Dinner.`);
// console.log(indexCantGuestList);
guestList1[guestList1.indexOf(cantGuestList)] = newPerson;
// console.log(guestList1);
// guestList1.pop();
// guestList1.push("Haroon");
// console.log(guestList1);
// Print a second set of invitation messages, one for each person who is still in your list.
console.log("second set of invitation");
guestList1.forEach(function (newguest) {
    console.log("".concat(newguest, " new Guest are invited to dinner."));
});
