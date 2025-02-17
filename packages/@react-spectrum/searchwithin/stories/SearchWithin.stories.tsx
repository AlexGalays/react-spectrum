/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
import {action} from '@storybook/addon-actions';
import {ActionButton} from '@react-spectrum/button';
import Filter from '@spectrum-icons/workflow/Filter';
import {Flex} from '@react-spectrum/layout';
import {Item, Picker} from '@react-spectrum/picker';
import React, {useState} from 'react';
import {SearchField} from '@react-spectrum/searchfield';
import {SearchWithin} from '../';
import {SpectrumPickerProps} from '@react-types/select';
import {SpectrumSearchFieldProps} from '@react-types/searchfield';
import {SpectrumSearchWithinProps} from '@react-types/searchwithin';

export default {
  title: 'SearchWithin'
};

function render(props: Omit<SpectrumSearchWithinProps, 'children'> = {}, searchFieldProps: SpectrumSearchFieldProps = {}, pickerProps: Omit<SpectrumPickerProps<object>, 'children'> = {}) {
  return (
    <SearchWithin label="This is label" {...props}>
      <SearchField {...searchFieldProps} onChange={action('change')} onSubmit={action('submit')} />
      <Picker defaultSelectedKey="all" {...pickerProps} onSelectionChange={action('selectionChange')}>
        <Item key="all">All</Item>
        <Item key="campaigns">Campaigns</Item>
        <Item key="audiences">Audiences</Item>
        <Item key="tags">Tags</Item>
        <Item key="long">This item is very long and word wraps poorly</Item>
      </Picker>
    </SearchWithin>
  );
}

function renderReverse(props: Omit<SpectrumSearchWithinProps, 'children'> = {}, searchFieldProps: SpectrumSearchFieldProps = {}, pickerProps: Omit<SpectrumPickerProps<object>, 'children'> = {}) {
  return (
    <SearchWithin label="Test label" {...props}>
      <Picker defaultSelectedKey="all" {...pickerProps} onSelectionChange={action('selectionChange')}>
        <Item key="all">All</Item>
        <Item key="campaigns">Campaigns</Item>
        <Item key="audiences">Audiences</Item>
        <Item key="tags">Tags</Item>
        <Item key="long">This item is very long and word wraps poorly</Item>
      </Picker>
      <SearchField {...searchFieldProps} onChange={action('change')} onSubmit={action('submit')} />
    </SearchWithin>
  );
}

function ResizeSearchWithinApp(props) {
  const [state, setState] = useState(true);

  return (
    <Flex direction="column" gap="size-200" alignItems="start">
      <div style={{width: state ? '300px' : '400px'}}>
        <SearchWithin label="Test label" {...props} width="100%">
          <SearchField onChange={action('change')} onSubmit={action('submit')} />
          <Picker defaultSelectedKey="all" onSelectionChange={action('selectionChange')}>
            <Item key="all">All</Item>
            <Item key="campaigns">Campaigns</Item>
            <Item key="audiences">Audiences</Item>
            <Item key="tags">Tags</Item>
            <Item key="long">This item is very long and word wraps poorly</Item>
          </Picker>
        </SearchWithin>
      </div>
      <ActionButton onPress={() => setState(!state)}>Toggle size</ActionButton>
    </Flex>
  );
}

export const Default = () => render({});

export const ValueControlled = () => render({}, {value: 'Controlled'});
ValueControlled.name = 'value (controlled) ';

export const isDisabled = () => render({isDisabled: true});
isDisabled.name = 'isDisabled: true';

export const isRequired = () => render({isRequired: true});
isRequired.name = 'isRequired: true';

export const isReadOnly = () => render({}, {isReadOnly: true, value: 'Read Only'});
isReadOnly.name = 'isReadOnly: true';

export const searchfieldDefaultValue = () => render({}, {defaultValue: 'Default Value'});
searchfieldDefaultValue.name = 'Default value for Searchfield';

export const pickerDefaultValue = () => render({}, {}, {defaultSelectedKey: 'tags'});
pickerDefaultValue.name = 'Default value for Picker';

export const isRequiredNecessityIndicatorLabel = () => render({isRequired: true, necessityIndicator: 'label'});
isRequiredNecessityIndicatorLabel.name = 'isRequired: true, necessityIndicator "label"';

export const isRequiredFalse_necessityIndicator = () => render({isRequired: false, necessityIndicator: 'label'});
isRequiredFalse_necessityIndicator.name = 'isRequired: false, necessityIndicator "label"';

export const InputValidationSateInvalid = () => render({}, {validationState: 'invalid'});
InputValidationSateInvalid.name = 'input validationState: invalid';

export const PickerValidationSateInvalid = () => render({}, {}, {validationState: 'invalid'});
PickerValidationSateInvalid.name = 'picker validationState: invalid';

export const PickerDisabled = () => render({}, {}, {isDisabled: true});

export const CustomWidth300 = () => render({width: 300});
CustomWidth300.name = 'Custom width: 300';

export const CustomWidth30 = () => render({width: 30});
CustomWidth30.name = 'Custom width: 30';

export const LabelPositionSide = () => render({labelPosition: 'side'});
LabelPositionSide.name = 'labelPosition: side';

export const NoVisibleLabel = () => render({label: undefined, 'aria-label': 'Test aria label'});

export const NoLabels = () => render({label: undefined});

export const ExternalLabel = () => (
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <span id="foo">External label</span>
    {render({label: undefined, 'aria-labelledby': 'foo'})}
  </div>
);

export const AutoFocusSearchField = () => render({}, {autoFocus: true});
AutoFocusSearchField.name = 'autoFocus: true on SearchField';

export const AutoFocusPicker = () => render({}, {}, {autoFocus: true});
AutoFocusPicker.name = 'autoFocus: true on Picker';

export const ReverseChildrenOrder = () => renderReverse({});

export const ResizeSearchWithin = () => <ResizeSearchWithinApp />;

export const ResizeSearchWithinNoLabel = () => <ResizeSearchWithinApp label={null} />;

export const iconFilter = () => render({}, {icon: <Filter />});
iconFilter.name = 'icon: Filter';

export const iconNull = () => render({}, {icon: null});
iconNull.name = 'icon: null';
