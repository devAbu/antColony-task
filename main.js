/* TASK 1 */

function generate_struct(structs) {
  var id = Math.floor(Math.random() * 10);
  var value = Math.floor(Math.random() * 10);
  var found = false;
  for (var i = 0; i < structs.length; i++) {
    if (structs[i].id == id) {
      found = true;
      break;
    }
  }
  if (found) {
    return generate_struct(structs);
  }
  for (var i = 0; i < structs.length; i++) {
    if (structs[i].value == value) {
      return generate_struct(structs);
    }
  }
  for (var i = 0; i < structs.length; i++) {
    for (var j = 0; j < structs.length; j++) {
      if (structs[i].value == structs[j].value && i != j) {
        return { id: id, value: value };
      }
    }
  }
  return { id: id, value: value };
}
a = [
  { id: 1, value: 3 },
  { id: 2, value: 7 },
  { id: 3, value: 3 },
  { id: 4, value: 1 },
  { id: 5, value: 4 },
];
console.log(generate_struct(a));

/* TASK 2 */
function lookup(obj, path) {
  var parts = path.split(".");
  var cur = obj;
  for (var i = 0; i < parts.length; i++) {
    if (cur[parts[i]]) {
      cur = cur[parts[i]];
    } else {
      return null;
    }
  }
  return cur;
}

object = { property1: { property2: "Apple", property3: "Orange" } };

path = "property1.property3";

console.log(lookup(object, path));
