export const limits = {
  Twitter: 280,
  LinkedIn: 3000,
  Instagram: 2200,
};

export const validatePost = (platform, text) => {
  const limit = limits[platform];

  if (text.length > limit) {
    return {
      valid: false,
      message: `Post exceeds ${platform} limit of ${limit} characters.`,
    };
  }

  return {
    valid: true,
    message: `Valid for ${platform}.`,
  };
};