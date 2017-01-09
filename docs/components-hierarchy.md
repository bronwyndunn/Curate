## Component Hierarchy

* **AuthFormContainer**
    * AuthForm (Sign Up and Sign In)

* **HomeContainer**
  * MenuBar
    * HomeBoard
    * NewBoardForm
    * NewPinForm
* **BoardContainer**
	* BoardIndex
*  **PinContainer**
	* PinIndex
* **UserContainer**
  * Followers
  * Following
  *  Boards
      * BoardIndex
  * PinContainer
      * PinIndex
* **SearchContainer**
	* SearchTag

  ## Routes
|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/boards/:boardId" | "BoardContainer" |
| "/pins/:pinId" | "PinContainer" |
| "/users/:userId" | "UserContainer" |
| "/users/:userId/boards" | "BoardIndex" |
| "/users/:userId/pins" | "PinIndex" |
| "/search" | "SearchContainer" |
