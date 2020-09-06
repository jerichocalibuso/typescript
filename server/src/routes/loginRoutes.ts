import { Router, Request, Response, request, NextFunction } from "express";

// Since req.body is typed with any in @types/express
// RequestWithBody interface will make sure that
// req.body will only have key with string and its value with string or undefined
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Not permitted");
};

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
    <div>
      <label>Email</label>
      <input name="email"/>
    </div>
    <div>
      <label>Password</label>
      <input name="password" type="password"/>
    </div>
    <button>Submit</button>
  </form>
  `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === "a@a.com" && password === "password") {
    // mark this person as logged in
    req.session = { loggedIn: true };
    res.redirect("/");
    // reidrect them to the root route
  } else {
    res.send("Invalid email or password");
  }
});

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
      <div>You are logged in<div>
      <a href="/logout">Logout</a>
    </div>
    `);
  } else {
    res.send(`
    <div>
      <div>You are not logged in<div>
      <a href="/login">Login</a>
    </div>
    `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = null;
  res.redirect("/");
});

// Route guard
router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route, logged in user");
});

export { router };
