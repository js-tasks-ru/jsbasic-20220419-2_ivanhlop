function makeFriendsList (friends){
  let string = document.createElement("ul");
  friends.map((item) => {
  string.innerHTML += "<li>" + item.firstName + " " + item.lastName + "</li>";
  })
  return string;
  }
