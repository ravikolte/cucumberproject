$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/productCategory/TestTotalNumberOfWomenDressProductRunner.feature");
formatter.feature({
  "line": 2,
  "name": "ProductCategoryPage",
  "description": "",
  "id": "productcategorypage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 16204382244,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify Total Number Of Women Dress Products",
  "description": "",
  "id": "productcategorypage;verify-total-number-of-women-dress-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "navigate to application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on women navigation menu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "verify total number of women products dispalyed as \"7\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginToAutomationPractices.navigate_to_application()"
});
formatter.result({
  "duration": 11010178244,
  "status": "passed"
});
formatter.match({
  "location": "ProductCategory.user_click_on_women_navigation_menu()"
});
formatter.result({
  "duration": 3582798908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 52
    }
  ],
  "location": "ProductCategory.verify_total_number_of_women_products_dispalyed_as(String)"
});
formatter.result({
  "duration": 22225587,
  "status": "passed"
});
formatter.after({
  "duration": 755338,
  "status": "passed"
});
});