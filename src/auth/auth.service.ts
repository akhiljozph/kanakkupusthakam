import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    signup(): string {
        return 'Don\'t panic! I\'m up and running.';
    }

    signin(): string {
        return 'Don\'t panic! I\'m up and running.';
    }
}
