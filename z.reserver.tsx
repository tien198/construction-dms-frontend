<Card className="card-elevated border-gray-700">
  <CardContent>
    <CardHeader
      title="Thông tin chung"
      sub="Thông tin cơ bản về công trình"
      icon={<BuildIcon className="text-primary" sx={{ fontSize: 28 }} />}
    />
    <Divider></Divider>
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 4 }}>
        <ConF.DocumentNo />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <ConF.DateOfSigning />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <ConF.SourceOfFunds />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <ConF.NameField />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <ConF.BudgetField />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <ConF.StringBudgetField />
      </Grid>
    </Grid>
  </CardContent>
</Card>;

{
  /* --- Phần 2: Chi tiết thực hiện & Quyết định --- */
}
<Card>
  <CardHeader title="Chi tiết thực hiện & Quyết định" />
  <CardContent>
    <Divider sx={{ mb: 3 }}>Thời gian thực hiện</Divider>
    <Grid container spacing={3}>
      {/* Thời gian thực hiện */}
      <Grid size={{ xs: 12, md: 6 }}>
        <ConF.ConstructionStartDate />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ConF.ConstructionEndDate />
      </Grid>
    </Grid>
    {/* Quyết định */}
    <Divider sx={{ mt: 4, mb: 3 }}>Quyết định phê duyệt</Divider>
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <ConF.DecisionNumber />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ConF.DecisionDate />
      </Grid>
    </Grid>

    <Divider sx={{ mt: 4, mb: 3 }}>Thông tin kỹ thuật</Divider>
    <Stack spacing={2}>
      <ConF.ExistingConditionOfTheStructure />
      <ConF.RepairScope />
    </Stack>
  </CardContent>
</Card>;
