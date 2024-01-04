
    
 // Worker class
export class Worker {
    fullName?: string = "ddd";
    birth: string = "";
    entry: string = "";
    workOccasionDetails: string = "";
    workOccasion: boolean = false;
    experienceDetails: string = "";
    experience: boolean = false;
    fatiguedDetails: string = "";
    fatigued: boolean = false;
    trainingDetails: string = "";
    training: boolean = false;
    trainingDate: string = "";
    physicsCapDetails: string = "";
    physicsCap: string = "";
    mentalCapDetails: string = "";
    mentalCap: string = "";
    physicalTensionDetails: string = "";
    physicalTension: string = "";
    mentalTensionDetails: string = "";
    mentalTension: string = "";
  }
  
  // WorkPlace class
  export class WorkPlace {
    name: string = "";
    sector: string = "";
    adverseWeatherDetalis: string = "";
    adverseWeather: boolean = false;
    lightingDetails: string = "";
    lighting: boolean = false;
    inspectionDate: string = "";
    inspection: boolean = false;
  }
  
  // Organizational class
  export class Organizational {
    eppDetails: string = "";
    eppDesignated: boolean = false;
    eppUsed: boolean = false;
    authorizationDetails: string = "";
    authorizationWork: boolean = false;
    riskDetails: string = "";
    risk: boolean = false;
    ptsDetails: string = "";
    pts: boolean = false;
    ptsApplied: boolean = false;
    changeDetails: string = "";
    change: boolean = false;
    blockingDetails: string = "";
    blocking: boolean = false;
    expectedBehaviorDetails: string = "";
    expectedBehavior: boolean = false;
  }
  
  // WorkEquipment class
  export class WorkEquipment {
    name: string = "";
    workEquipmentFailsDetalis: string = "";
    workEquipmentFails: boolean = false;
    energy: string = "";
    defenseFailedDetails: string = "";
    defenseFailed: boolean = false;
    correctUseEquimantDetails: string = "";
    correctUseEquimant: boolean = false;
  }
  
  // Main Events class
  export class Events {
    id: string = "";
    dateEvent: string = "";
    description: string = "";
    severity: string = "";
    poSeverity: string = "";
    bodyPart: any = null;
    injury: string = "";
    incidenType: string = "";
    imagen: string = "";
    aditionalImagen: string = "";
    worker: Worker = new Worker();
    workPlace: WorkPlace = new WorkPlace();
    organizacional: Organizational | null = null;
    workEquipement: WorkEquipment = new WorkEquipment();
  }