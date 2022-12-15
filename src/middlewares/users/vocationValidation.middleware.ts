import { Request, Response, NextFunction } from 'express';

const vocationValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { vocation } = req.body;

  if (!vocation) {
    return res.status(400).json({ message: '"vocation" is required' });
  }

  if (typeof vocation !== 'string') {
    return res.status(422).json({ message: '"vocation" must be a string' });
  }

  if (vocation.length < 3) {
    return res.status(422)
      .json({ message: '"vocation" length must be at least 3 characters long' });
  }

  return next();
};

export default vocationValidation;