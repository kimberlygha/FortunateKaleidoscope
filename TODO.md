# TODO's

TASK: 1 **HIGH PRIORITY**
x Set up users snippets page
  x hook up users page to db (getSnipsByUser)
  x look in userController.js to send out users Snips

TASK: 2 **HIGH PRIORITY**
x Set up auth for users
  x /auth/github
    x Please decide on what this route should do
      x On success, do we redirect or do we send a confirm token?
    x All of the logic lives in the authController.js file
  x Reflect auth on the view
  x Need to reflect session on view

TASK: 4 **HIGH PRIORITY**
x deploy to heroku

TASK: 3 **MEDIUM PRIORITY**
- Get downloads hooked up to the downloads page
  - /download/:snippetID
    - Need to get snippet by id
    - write snippet
    - send snippet out

TASK: 5 **LOW PRIORITY**
  - /api/user/:userId/download
    - getSnippetsByUser
    - write all snippets to folder
    - zip up folder
    - send zip file out

TASK: 6 **LOW PRIORITY**
  - Have user be able to update their Snippets
    - /api/user/:userId/update/:snipId
    - ON GET
      - takes snip id
      - retrieves snip from db
    - ON post
      - posts snip
      - updates db with new snip
