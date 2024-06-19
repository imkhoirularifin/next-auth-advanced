import { cn } from '@/lib/utils';
import React from 'react';
import { poppins } from '../fonts';

interface HeaderProps {
	label: string;
}

export default function header({ label }: HeaderProps) {
	return (
		<div className="w-full flex flex-col gap-y-4 items-center justify-center">
			<h1 className={cn('text-3xl font-semibold', poppins.className)}>
				🔐 Auth
			</h1>
			<p className="text-muted-foreground text-sm">{label}</p>
		</div>
	);
}
