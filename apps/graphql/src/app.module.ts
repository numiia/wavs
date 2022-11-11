import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusGatewayDriver, MercuriusGatewayDriverConfig } from '@nestjs/mercurius';

/** TODO: add environment variables, environment variable checks */

@Module({
	imports: [
		GraphQLModule.forRoot<MercuriusGatewayDriverConfig>({
			graphiql: true,
			gateway: {
				services: [
					{ name: 'messages', url: 'http://localhost:3510/graphql' },
					{ name: 'users', url: 'http://localhost:3500/graphql' },
				],
			},
			driver: MercuriusGatewayDriver,
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
