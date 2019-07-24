
export class Tramsaction{
    constructor(
        public Transaction_Id:number,
        public PlayerScore:number,
        public DealerScore:number,
        public Session_Id:string,
        public Result:string,
        public Card_Id:number,
        public Game_Id:number
    ){}
}