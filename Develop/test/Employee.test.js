const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const emp = new Employee();
  expect(typeof(emp)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const emp = new Employee("Foo", testValue);
  expect(emp.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const emp = new Employee("Foo", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const emp = new Employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const emp = new Employee("Foo", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const emp = new Employee("Foo", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const emp = new Employee("Alice", 1, "test@test.com");
  expect(emp.getRole()).toBe(testValue);
});
