abstract class TakePhoto {
  constructor(public cameraMode: string, public fileter: string) {}
  abstract getSepia(): void;
  getRealTime(): number {
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

export {};
