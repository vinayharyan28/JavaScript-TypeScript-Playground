function detectType(value: number | string) {
  if (typeof value === "string") {
    // Checking each one if []
    return value.toLocaleLowerCase();
  }
  return value + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  return id.toLocaleLowerCase();
}
