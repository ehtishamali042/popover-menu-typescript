import { Menu, Transition } from '@headlessui/react';
import { Fragment, memo } from 'react';

import classnames from 'classnames';
import { groupBy } from 'lodash';
import Link from 'next/link';

export type TPopoverMenuItem = {
  groupId: string;
  id: string;
  icon?: string;
  label?: string;
  iconClassName?: string;
  disabled?: boolean;
  clickableWhileDisabled?: boolean;
  separator?: boolean;
} & (
  | {
      onClick: () => void;
      href?: never;
    }
  | {
      onClick?: never;
      href: string;
      target?: string;
    }
);

type TPopoverMenuProps = {
  buttonIcon?: string;
  buttonIconClassName?: string;
  buttonClassName?: string;
  buttonSize?: 'sm' | 'base';
  buttonOutlined?: boolean;
  items: TPopoverMenuItem[];
  label?: JSX.Element;
  leftAligned?: boolean;
};

const PopoverMenu = memo(function PopoverMenu(props: TPopoverMenuProps) {
  // Group items by separator
  const groupedItems: Array<TPopoverMenuItem[]> = Object.values(
    groupBy(props.items, 'groupId')
  );

  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button
        as="button"
        // @ts-ignore
        icon={props.buttonIcon}
        outlined={props.buttonOutlined}
        className={props.buttonClassName}
        iconClassName={props.buttonIconClassName}
      >
        {props.label}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={classnames(
            'absolute z-10 mt-2 min-w-[12rem] origin-top-right divide-y divide-gray-300 rounded-md bg-white shadow-lg ring-1 ring-readablePrimaryOnBackground focus:outline-none text-sm whitespace-nowrap',
            props.leftAligned ? 'left-0' : 'right-0'
          )}
        >
          {groupedItems.map(groupItems => (
            <div className="p-1" key={groupItems[0].id}>
              {groupItems.map(item => (
                <Menu.Item
                  key={item.id}
                  disabled={item.disabled && !item.clickableWhileDisabled}
                >
                  {({ active }) => {
                    const className = classnames(
                      'flex w-full items-center rounded-md ltr:pl-2 ltr:pr-8 rtl:pr-2 rtl:pl-8 py-2',
                      active && 'bg-primary text-primary-text',
                      item.disabled && 'text-gray-400',
                      item.disabled &&
                        !item.clickableWhileDisabled &&
                        'cursor-default'
                    );

                    const icon = item.icon && (
                      <i
                        className={classnames(
                          'icon ltr:mr-2 rtl:ml-2',
                          `icon-${item.icon}`,
                          item.iconClassName
                        )}
                        aria-hidden="true"
                      />
                    );

                    if (item.disabled && !item.clickableWhileDisabled) {
                      return (
                        <div className={className}>
                          {icon} {item.label}
                        </div>
                      );
                    }

                    if (item.href) {
                      return (
                        <Link
                          href={item.href}
                          className={className}
                          target={item.target}
                        >
                          {icon} {item.label}
                        </Link>
                      );
                    } else {
                      return (
                        <button onClick={item.onClick} className={className}>
                          {icon} {item.label}
                        </button>
                      );
                    }
                  }}
                </Menu.Item>
              ))}
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
});

export default PopoverMenu;
