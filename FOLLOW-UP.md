# Follow-up Questions

```
Use this document to answer any follow-up questions.
```

### Follow Up Questions:

1. What libraries did you use? Why did you use them?

The main libraries additions, **react**, **react-router-dom**, **react-redux**,
**node-sass**, **react-html-parser**, **enzyme**, and other supplementary.

- react - UI components framework
- react-redux - React states manager
- node-sass - SASS, css preprocessor compiler
- react-router-dom - For react routing
- react-html-parser - Decode html string
- enzyme - React test aid library
- Supplementary: react-dom; redux.

2. If you had more time, what further improvements or new features would you add?

I would improve the UI, and enrich the over search related info on the page namely:

- Show total number of search results;
- Fix the result item index, to correspond to its index in the total search results.
- Make use of the how to apply.

3. Which parts are you most proud of? And why?

The UI and UX came together nicely, and the loading solution was interesting to
implement and adds a nice glare to the experience.

4. Which parts did you spend the most time with? What did you find most difficult?

Create the tests to accommodate fetch calls and asynchronous operations from Redux
dispatch. Did not achieve that exactly but created a set of tests that reinforce
that the remaining parts are working correctly.

The CORS required some research and decision making on how to better deal with it.

---

### Test required info

Managed to create tests that help cover the user stories

- CustomURL - make sure the query URL is handled properly
- Home - make sure the fetch runs at least once
- JobList - make sure that the entries are rendered properly
- Pagination - make sure pagination renders properly
