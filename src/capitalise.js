function capitalise(string) {
  return string.at(0).toUpperCase() + string.slice(1).toLowerCase();
}

export { capitalise };
