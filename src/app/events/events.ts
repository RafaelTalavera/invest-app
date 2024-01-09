
    
export class Worker {
    birth: string = "";
    entry: string = "";
    workOccasion: string = "";
    experience: number = 0;
    hoursWorked: number = 0;
    trainingDate: string = "";
    accidentHistory: boolean = false;
    dateAccidentHistory: string = "";
  }
  
  export class WorkPlace {
    name: string = "";
    sector: string = "";
    weather: string = "";
    lighting: string = "";
    noise: string = "";
    inspectionDate: string = "";
    inspection: boolean = false;
  }
  
  export class Method{
    eppDesignated: boolean = false;
    eppUseds: boolean = false;
    authorization: boolean = false;
    authorizationWork: boolean = false;
    pts: boolean = false;
    ptsApplied: boolean = false;
    risk: boolean = false;
    ptsDetails: string = "";
    expectedBehavior: boolean = false;
   
  }
  
  export class WorkEquipment {
    name: string = "";
    energy: string = "";
    workEquipmentFails: string = "";
    defense: boolean = false;
    defenseIntegrity: string = "";
    correctUseEquimant: string = "";
    locked: string = "";
  }
  
export class activity{
  strength: string = "";
  repetition: string = "";
  mobility: string = "";
  precision: string = "";
  height: string = "";
  confinedSpace: string = "";
}

  export class Events {
    id: string = "";
    dateEvent: string = "";
    description: string = "";
    severity: string = "";
    poSeverity: string = "";
    bodyPart: string = "";
    injury: string = "";
    incidenType: string = "";
    imagen: string = "";
    aditionalImagen: string = "";
    worker: Worker = new Worker();
    workPlace: WorkPlace = new WorkPlace();
    organizacional: Method = new Method();
    workEquipement: WorkEquipment = new WorkEquipment();
    activity: activity = new activity();
  }