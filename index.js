/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);

function getAverageRate() {
  const total = freelancers.reduce(
    (total, freelancer) => total + freelancer.rate,
    0,
  );
  return total / freelancers.length;
}

const averageRate = getAverageRate();

function makeFreelancer() {
  const name = randomItem(NAMES);
  const occupation = randomItem(OCCUPATIONS);
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));

  return { name, occupation, rate };
}

function getAverageRate() {
  const total = freelancers.reduce(
    (total, freelancer) => total + freelancer.rate,
    0,
  );
  return total / freelancers.length;
}

function FreelancerRow(freelancer) {
  const $tr = document.createElement("tr");
  $tr.innerHTML = `
    <td>${freelancer.name}</td>
    <td>${freelancer.occupation}</td>
    <td>$${freelancer.rate}</td>
  `;
  return $tr;
}

function FreelancerRows() {
  const $tbody = document.createElement("tbody");
  const $freelancers = freelancers.map(FreelancerRow);
  $tbody.replaceChildren(...$freelancers);
  return $tbody;
}

function AverageRate() {
  const $p = document.createElement("p");

  $p.textContent = `Average hourly rate: $${averageRate}/hr`;
  return $p;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <div id="average"></div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody id="FreelancerRows"></tbody>
    </table>
  `;
  $app.querySelector("#average").replaceWith(AverageRate());
  $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}

render();
