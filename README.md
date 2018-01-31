# js-webinar

Tasks of JS webinar.

## Requirements

* Git
* NodeJS 8 (6 is also supported)

## Setup

```
$> git clone https://github.com/szikszail/js-webinar.git
$> cd js-webinar
$> npm install
```

## Running tests

To run tests for each module, you can use the 

```
$> npm run test:module-N
```

where `N` is the number of modules, i.e. 1-5.

For example to run the test for the first module, use

```
$> npm run test:module-1
```

## Tasks

To solve the tasks of each module first you should read carefully both the documentation (i.e. `/** */`) and simple comments (i.e., `//`, `/* */`), but in short the following actions should be taken:

1. The solution code should be written between the comment lines which indicates it and the result should be assigned to the given variable:

    ```javascript
    // PLACE YOUR CODE BETWEEN THIS...
    resultVariable = 42;    
    // ...AND THIS COMMENT LINE!
    ```
    
1. In this module the Mocha test suites and test cases should be defined in `module-2/test/calc.spec.js`.

   The implementation of the suites and cases is not the main task in this module, but it can be done.
1. In this module the task is to create Element, Elements, Layout and HomePage classes according to what is written in the presentation.
1. In this module the task is to create the functions based on the documentation comments.
1. In this module the task it to create a feature file, based on the test cases from [TEST-CASES.md](/module-5/TEST-CASES.md), and to create the pending step definitions.

## Task review

First of all, tests can be used to check whether the solutions are good or not. On the other, if the implementations are pushed to a forked repository and a pull request is opened to the **master** branch, it is going to be reviewed.

To have a forked repository and create pull request, the following steps could be done:

1. Create a **GitHub account**.
1. Fork the repository, using the **Fork** button, which can be found in the top-right corner.
1. **Clone your instance** of the forked repository to your computer:

    ```
    $> git clone https://github.com/<your-user-name>/js-webinar.git
    $> cd js-webinar
    ```

1. To get updates and latest version, you should **set the original repository as another remote**:

    ```
    $> git remote add source https://github.com/szikszail/js-webinar.git
    ```

1. Anytime, you want to **update your code with latest changes on the original repository**, the following command should be executed:

    ```
    $> git pull source
    ```

1. If you have done any change, you can **commit and push** it **to your repository**:

    ```
    $> git add .
    $> git commit -am "<describe-your-changes>
    $> git push origin master
    ```

1. Create a pull request either by using the option which GitHub offers in your repository, OR using the **Create Pull request** option above the file list.

    _**Note** that the **Compare across forks** might need to be clicked first to see the forked repository (yours too)._

1. If the pull request is in place, a **review** can be requested for it, by adding the account **szikszail** as a reviewer.

**Important!** These review pull requests won't be merged to any branch of the original repository.