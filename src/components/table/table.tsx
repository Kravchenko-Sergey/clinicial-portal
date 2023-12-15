// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { flexRender, useReactTable, getCoreRowModel, getSortedRowModel } from '@tanstack/react-table'
import s from './table.module.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { IconDropDown } from '../../assets/icons/icon-drop-down.tsx'

type TableProps = {
	data: any
	columns: any
}

export const Table = ({ data, columns }: TableProps) => {
	const [sorting, setSorting] = useState([])
	const navigate = useNavigate()

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		state: {
			sorting: sorting
		},
		onSortingChange: setSorting
	} as any)

	const handleNameClick = (id: string) => navigate(`/patients/${id}`)

	return (
		<div className={s.root}>
			<table className={s.table}>
				{table.getHeaderGroups().map(headerGroup => (
					<tr key={headerGroup.id}>
						{headerGroup.headers.map(header => (
							<th key={header.id} className={s.th} onClick={header.column.getToggleSortingHandler()}>
								<div className={s.thFlex}>
									{header.isPlaceholder ? null : (
										<>
											{flexRender(header.column.columnDef.header, header.getContext())}
											{
												{ asc: <IconDropDown style={{ transform: 'rotate(180deg)' }} />, desc: <IconDropDown /> }[
													header.column.getIsSorted() ?? ''
												]
											}
										</>
									)}
								</div>
							</th>
						))}
					</tr>
				))}
				<tbody>
					{table.getRowModel().rows.map(row => (
						<tr key={row.id}>
							{row.getVisibleCells().map(cell => {
								console.log(cell)
								if (cell.column.id === 'name') {
									return (
										<td key={cell.id} className={s.td} onClick={() => handleNameClick((cell.row.original as any).id)}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</td>
									)
								}
								return (
									<td key={cell.id} className={s.td}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								)
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
