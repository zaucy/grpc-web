export abstract class ClientReadableStream {
  on(eventType: string, callback: (...args) => void): this;
  cancel(): void;
}

export const Error: undefined;

export abstract class AbstractClientBase {
  
}

export namespace AbstractClientBase {
  export interface MethodInfo<RequestT, ResponseT> {

  }
}

export abstract class GrpcWebStreamParser {
  isInputValid(): boolean;
  getErrorMessage(): string;
  parse(arg0: any): void;
}

export namespace GrpcWebStreamParser {
  export enum FrameType {
    DATA,
    TRAILER,
  }
}

export enum StatusCode {
  OK,
  CANCELLED,
  UNKNOWN,
  INVALID_ARGUMENT,
  DEADLINE_EXCEEDED,
  NOT_FOUND,
  ALREADY_EXISTS,
  PERMISSION_DENIED,
  UNAUTHENTICATED,
  RESOURCE_EXHAUSTED,
  FAILED_PRECONDITION,
  ABORTED,
  OUT_OF_RANGE,
  UNIMPLEMENTED,
  INTERNAL,
  UNAVAILABLE,
  DATA_LOSS,
}

export namespace StatusCode {
  function fromHttpStatus(httpStatus: number): StatusCode;
}

export const GenericTransportInterface: {};

export const Status: {};

export abstract class GrpcWebClientReadableStream<ResponseT> extends ClientReadableStream
{
  on(eventType: 'data', callback: (response: ResponseT) => void): this;
  on(eventType: 'status', callback: (status: StatusCode) => void): this;
  on(eventType: 'end', callback: () => void): this;
  on(eventType: 'error', callback: () => void): this;
}

export abstract class StreamBodyClientReadableStream extends ClientReadableStream {
  on(eventType: 'data', callback: (response: ResponseT) => void): this;
  on(eventType: 'status', callback: (status: StatusCode) => void): this;
  on(eventType: 'end', callback: () => void): this;
  on(eventType: 'error', callback: () => void): this;
}
