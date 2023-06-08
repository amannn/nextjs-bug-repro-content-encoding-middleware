import { NextRequest, NextResponse } from 'next/server';

const middleware = async (request: NextRequest) => {
  let response = NextResponse.next({ request });
  return response;
};

export default middleware;
