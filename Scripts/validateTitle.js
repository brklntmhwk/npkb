const validateTitle = (title) => {
  const regex = new RegExp(/[!"#$%&'\*\-\/;:<=>?@\[\\\]^_`{|}~]/g);
  const validatedTitle = title.replaceAll(regex, "");

  return validatedTitle;
}

module.exports = validateTitle;
