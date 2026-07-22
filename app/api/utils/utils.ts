import { AxiosError, isAxiosError } from "axios";
import { NextResponse } from "next/server";

export type ApiError = AxiosError<{ error: string }>;

export function logErrorResponse(errorObj: unknown): void {
  const green = '\x1b[32m';
  const yellow = '\x1b[33m';
  const reset = '\x1b[0m';

  console.log(`${green}> ${yellow}Error Response Data:${reset}`);
  console.dir(errorObj, { depth: null, colors: true });
}

export function createErrorResponce(error: ApiError) {
  if (isAxiosError(error)) {
    logErrorResponse(error.response?.data);
    return NextResponse.json(
      { error: error.message, response: error.response?.data },
      { status: error.status || error.response?.status || 500 }
    );
  }
  logErrorResponse({ message: (error as Error).message });
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}