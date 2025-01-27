'use client';

import React, { useState, useTransition } from 'react';
import * as z from 'zod';
import CardWrapper from '@/components/auth/card-wrapper';
import { useForm } from 'react-hook-form';
import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormError from '@/components/form-error';
import FormSuccess from '../form-success';
import { register } from '@/actions/register';

export default function RegisterForm() {
	const [error, setError] = useState<string | undefined>('');
	const [success, setSuccess] = useState<string | undefined>('');
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
		setError('');
		setSuccess('');
		startTransition(() => {
			register(data).then((data) => {
				setSuccess(data.success);
				setError(data.error);
			});
		});
	};

	return (
		<CardWrapper
			headerLabel="Create an account"
			backButtonLabel="Already have an account?"
			backButtonHref="/auth/login"
			showSocialLogin
		>
			<Form {...form}>
				{/* TODO: implement handleSubmit */}
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder="John Doe"
											type="text"
											disabled={isPending}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder="john@gmail.com"
											type="email"
											disabled={isPending}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder="********"
											type="password"
											disabled={isPending}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormError message={error} />
					<FormSuccess message={success} />

					<Button type="submit" className="w-full" disabled={isPending}>
						Create an account
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
}
