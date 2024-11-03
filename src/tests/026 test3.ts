interface IPayment {	
	"sum": number;
	"from": number;
	"to": number;
}

// enum PaymentStatus {
// 	Success = "success",
// 	Failed = "failed",
// }

interface IPaymentRequest extends IPayment {}

interface IDataSaccess extends IPayment{
	"databaseId": number;
}

interface IDataFailed {
	"errorMessage": string;
	"errorCode": number;
}

// interface IResponse {
// 	"status": PaymentStatus;
// 	"data": IDataSaccess | IDataFailed;
// }

interface IResponseSuccess {
	"status": PaymentStatus.Success;
	"data": IDataSaccess;
}

interface IResponseFailed {
	"status": PaymentStatus.Failed;
	"data": IDataFailed;
}

// function get(): IResponseSuccess | IResponseFailed {
	
// }