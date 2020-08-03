declare module 'intuit-oauth-typescript' {
  export class OAuthClientSecret {
    realmId: string;
    access_token: string;
    expires_in: number;
    refresh_token: string;
    x_refresh_token_expires_in: number;
  }

  export class Response<T extends object = object> {
    getJson(): T;
  }

  export class OAuthClient {
    constructor(options: object);
    authorizeUri(options: object): string;
    createToken(uri: string): { token: OAuthClientSecret };
    refreshUsingToken(token: string): Promise<Response<OAuthClientSecret>>;
  }

  // eslint-disable-next-line @typescript-eslint/class-name-casing
  export class scopes {
    static readonly Accounting = 'com.intuit.quickbooks.accounting';
    static readonly Payment = 'com.intuit.quickbooks.payment';
    static readonly Payroll = 'com.intuit.quickbooks.payroll';
    static readonly TimeTracking = 'com.intuit.quickbooks.payroll.timetracking';
    static readonly Benefits = 'com.intuit.quickbooks.payroll.benefits';
    static readonly Profile = 'profile';
    static readonly Email = 'email';
    static readonly Phone = 'phone';
    static readonly Address = 'address';
    static readonly OpenId = 'openid';
    static readonly Intuit_name = 'intuit_name';
  }
}
