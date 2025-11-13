const roleMiddleware = (roles: string[]) => (req: any, res: any, next: any) => {
  if (req.user.role.includes(roles)) {
    next();
  } else {
    res.status(403).json({ msg: "Access Denied. Admins Only", success: false });
  }
};

export default roleMiddleware;
